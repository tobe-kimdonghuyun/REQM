
*********************************************************************************************
* nexacro-xeni-java                                                                         *
*********************************************************************************************


* General ***********************************************************************************

	nexacro-xeni is a web application using Apache POI library, 
	which receives data included in components from nexacro platform, 
	exports the data as Microsoft Excel files and makes the relevant files downloadable.
	
	In addition, it receives Microsoft Excel files from nexacro platform, 
	reads data from the relevant files and sends the data to nexacro platform. 


* Configuration *****************************************************************************

	Unzipped nexacro-xeni includes the following items in the WEB-INF/web.xml.

	* Excel Export Service ******************************************************************
		A service for creating Excel files.

		<servlet>
			<servlet-name>XExportImport</servlet-name>
		<servlet-class>com.nexacro.xeni.services.GridExportImportServlet</servlet-class>
		</servlet>

		<servlet-mapping>
			<servlet-name>XExportImport</servlet-name>
			<url-pattern>/XExportImport</url-pattern>
		</servlet-mapping>

	* Excel Import Service ******************************************************************
		A service for uploading & importing Excel files.
                (Modification has been made so that Excel import and export services are used indiscriminately.)

		<servlet>
			<servlet-name>XImport</servlet-name>
			<servlet-class>com.nexacro.xeni.services.GridExportImportServlet</servlet-class>
		</servlet>      

		<servlet-mapping>
			<servlet-name>XImport</servlet-name>
			<url-pattern>/XImport</url-pattern>
		</servlet-mapping>   

	* Setting A Path for Downloaded(Exported) Files *****************************************
		It sets a temporary path for excel files to be downloaded on nexacro platform.
		It designates the path under the current context.              

		<context-param>
			<param-name>export-path</param-name>
			<param-value>/export</param-value>
		</context-param>

	* Setting A Path for Uploaded(Imported) Files *******************************************
		It sets a temporary path for excel files to be uploaded from nexacro.
		It designates the path under the current context.

		<context-param>
			<param-name>import-path</param-name>
			<param-value>/import</param-value>
		</context-param>

	* Whether the Executable for Temporary File Manager *************************************
	        It manages the temporary files used for export/import.
		In case of 'true',
		Downloaded (or exported) temporary files are deleted at a set interval.
		Uploaded (or imported) temporary files are deleted right after the import operations.
		Files used for export/import are not deleted in case of 'false'.
		The default is true.
	
		<context-param>
			<param-name>monitor-enabled</param-name>
			<param-value>true</param-value>
		</context-param>    
	
	* Temporary File Manager Execution Cycle ************************************************
		It sets the execution cycle for the file manager to delete 
		the downloaded(exported) temporary files. 
		The unit is ‘minute’, and the default is 30.
		(Valid when the monitor-enabled property is 'true')

		<context-param>
			<param-name>monitor-cycle-time</param-name>
			<param-value>30</param-value>
		</context-param>

	* Temporary File Storage Time ***********************************************************
		It sets the time to store the downloaded(exported) temporary files. 
		Whenever the file manager is executed, it deletes the files which have been stored 
		more than a certain amount of time.
		The unit is minute, and the default is 10.
		(Valid when the monitor-enabled property is 'true')

		<context-param>
			<param-name>file-storage-time</param-name>
			<param-value>10</param-value>
		</context-param>

*********************************************************************************************
