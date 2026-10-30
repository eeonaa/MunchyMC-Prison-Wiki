import ItemList from "./items/itemList"
import Item from "./items/item"


class Main {
    private itemList: ItemList = new ItemList()

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

        const kelp2 = new Item({
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

        const homer = new Item({
            name: 'homer gut',
            rarity: 'epic',
            location: 'cartoon',
            map: '12',
            item: 'minecraft_leather_chestplate',
            enchants: [],
            tint: '#ffd700',
            hints: [],
            tags: []
        })

        const toph = new Item({
            name: 'toph eyes',
            rarity: 'ultra',
            location: 'avatar earth',
            map: '12',
            item: 'minecraft_player_head',
            enchants: [],
            tint: undefined,
            hints: [],
            tags: []
        })

        const twister = new Item({
            name: 'sea twister ephermeral essence',
            rarity: 'ultra legend',
            location: undefined,
            map: '12',
            item: 'munchy_sea_twister_essence',
            enchants: [],
            tint: undefined,
            hints: [],
            tags: []
        })

        const marcy = new Item({
            name: "marceline's axe bass",
            rarity: 'legendary',
            location: 'adventure time',
            map: '12',
            item: 'munchy_marcelines_bass_axe',
            enchants: ['fortune XV'],
            tint: undefined,
            hints: [],
            tags: []
        })

        const staff = new Item({
            name: "flame princess' scorched staff",
            rarity: 'fabled',
            location: 'adventure time',
            map: '12',
            item: 'munchy_flame_princess_staff',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const bmo = new Item({
            name: 'bmo',
            rarity: 'mythical',
            location: 'adventure time',
            map: '12',
            item: 'munchy_bmo',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const pops = new Item({
            name: 'pops top hat',
            rarity: 'extinct',
            location: undefined,
            map: '12',
            item: 'minecraft_player_head',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const bad = new Item({
            name: 'badBoyHalo bobber',
            rarity: 'vote rare',
            location: undefined,
            map: '12',
            item: 'minecraft_fishing_rod',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const wand = new Item({
            name: "wanda's wand",
            rarity: 'creature',
            location: undefined,
            map: '12',
            item: 'munchy_wandas_wand',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const treasure = new Item({
            name: "flying dutchman's treasure",
            rarity: 'fishing special',
            location: undefined,
            map: '12',
            item: 'minecraft_chest',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const ticket = new Item({
            name: "Winner's Ticket",
            rarity: 'leaderboard',
            location: undefined,
            map: '12',
            item: 'munchy_winner_ticket',
            enchants: undefined,
            tint: undefined,
            hints: [],
            tags: []
        })

        const jfk = new Item({
            name: "Reverse JFK Shoes",
            rarity: 'politics special',
            location: undefined,
            map: '12',
            item: 'minecraft_leather_boots',
            enchants: [],
            tint: '#0000FF',
            hints: [],
            tags: []
        })

        const legs = new Item({
            name: "Cat Legs",
            rarity: 'pet special',
            location: undefined,
            map: '12',
            item: 'minecraft_leather_leggings',
            enchants: [],
            tint: undefined,
            hints: [],
            tags: []
        })
    }
}

addEventListener('DOMContentLoaded', () => {
    new Main()
})
