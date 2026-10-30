import Item from "./itemlist/item"

class Main {
    constructor() {
        const kelp = new Item({
            name: 'diet dr kelp',
            rarity: 'semi',
            location: 'spongebob',
            map: '12',
            item: 'minecraft_potion',
            enchants: [''],
            tint: '#339900',
            hints: ['Boosts next 40 crops and 80 logs'],
            tags: ['lopping', 'farming']
        })

        document.getElementById('item-list')?.appendChild(kelp.getItemListComponent())
    }
}

addEventListener('DOMContentLoaded', () => {
    new Main()
})
