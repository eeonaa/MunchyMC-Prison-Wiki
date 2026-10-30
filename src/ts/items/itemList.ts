import { rarityList } from "./itemTypes"

export default class ItemList {
    constructor() {
        for (let i = 0; i < rarityList.length; i++) {
            this.createListItem(rarityList[i])
        }
    }

    createListItem(rarity: string) {
        const holder = document.getElementById('item-list')

        const label = document.createElement('div')
        label.classList.add('label', rarity.split(' ').join('_'))
        label.innerText = rarity
        holder?.appendChild(label)

        const list = document.createElement('div')
        list.classList.add('list', rarity.split(' ').join('_'))
        holder?.appendChild(list)
    }
}
