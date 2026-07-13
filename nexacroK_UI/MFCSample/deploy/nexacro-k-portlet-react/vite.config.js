
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs/promises';
import mime from 'mime';
import { parse as parseUrl } from 'url';

export default defineConfig({
    root: __dirname,
    logLevel: 'error',
    plugins: [
        react(),
        {
            name: 'serve-popup-static-direct',
            enforce: 'pre',
            configureServer(server)
            {
                // nexacro popup window는 react bundle 과정을 처리하면 안되므로 middle-ware 처리
                server.middlewares.use(async (req, res, next) =>
                {
                    const { pathname = '' } = parseUrl(req.url);
                    const cleanPath = pathname.split('?')[0];

                    const isPopupHTML = /^\/[^/]+\/popup\.html$/.test(cleanPath);
                    const isPopupAsset =
                        /^\/[^/]+\/.*\.(js)$/.test(cleanPath);




                    const skipForModule = isPopupAsset && req.headers['referer']?.includes('popup.html') && !req.url?.includes('.mjs');

                    const shouldBypass = isPopupHTML || skipForModule;

                    if (!shouldBypass) return next();



                    const popupFilePath = path.join(__dirname, cleanPath.replace(/^\/+/, ''));
                    try
                    {
                        const file = await fs.readFile(popupFilePath, 'utf-8');
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html');
                        res.end(file);
                        return; // ✅ never reach Vite's HTML transform
                    } catch (e)
                    {
                        console.warn('[popup bypass] not found:', popupFilePath);
                        return next(); // fallback if file missing
                    }
                });
            }
        }
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true
    },
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: 'react'
    },
    server: {
        host: true,
        fs: {
            allow: [
                __dirname,
                path.resolve(__dirname, '../../..') // allow for nested public/src
            ]
        }
    }
});
