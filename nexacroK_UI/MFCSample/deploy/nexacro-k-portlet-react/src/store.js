import { create } from 'zustand'


const useStore = create((set) => ({
    boxOrder: [0, 1, 2, 3, 4, 5, 6, 7],
    boxData: {
        0: { class: 'Jace1', fdl: "", appkey: "Jace1" },//'Base::faded_denim_contents.xfdl'
        1: { class: 'Jace1', fdl: 'Base::ultimate_gray_contents.xfdl', appkey: "Jace1" },
        // 2: { class: 'Jace1', fdl: 'Base::princess_blue_contents.xfdl' },
        2: { class: 'D1wiK', fdl: "", appkey: "D1wiK" },
        3: { class: 'Jace1', fdl: 'Base::blossom_contents.xfdl', appkey: "Jace1" },
        4: { class: 'Jace1', fdl: 'Base::classic_blue_contents.xfdl', appkey: "Jace1" },
        5: { class: 'Jace1', fdl: 'Base::grape_compote_contents.xfdl', appkey: "Jace1" },
        6: { class: 'Jace1', fdl: 'Base::tangger_turquoise_contents.xfdl', appkey: "Jace1" },
        7: { class: 'Jace1', fdl: 'Base::polar_night_contents.xfdl', appkey: "Jace1" },

    },
    swapBox: (fromId, toId) =>
        set((state) =>
        {
            const newOrder = [...state.boxOrder]
            const fromIndex = newOrder.indexOf(fromId)
            const toIndex = newOrder.indexOf(toId)
            if (fromIndex === -1 || toIndex === -1) return {}
            // swap
            newOrder[fromIndex] = toId
            newOrder[toIndex] = fromId
            return { boxOrder: newOrder }
        })
}))

export default useStore
