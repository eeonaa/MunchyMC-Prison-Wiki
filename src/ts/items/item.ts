import type { itemSettings, location, rarity, tag } from "./itemTypes"

export default class Item {
    public name: string
    public rarity: rarity
    public location?: location
    public map: string
    public item: string
    public enchants?: Array<string>
    public tint?: string
    public hints: Array<string>
    public tags: Array<tag>

    private settings: itemSettings
    private default: itemSettings = {
        name: 'Placeholder',
        rarity: 'semi',
        location: undefined,
        map: '0',
        item: 'minecraft_barrier',
        enchants: undefined,
        tint: undefined,
        hints: ['???'],
        tags: ['misc']
    }

    constructor(settings: itemSettings) {
        this.settings = {
            ...this.default,
            ...settings
        }

        this.name = this.settings.name
        this.rarity = this.settings.rarity
        this.location = this.settings.location
        this.map = this.settings.map
        this.item = this.settings.item
        this.enchants = this.settings.enchants
        this.tint = this.settings.tint
        this.hints = this.settings.hints
        this.tags = this.settings.tags

        this.addToList(this.rarity)
    }

    public getItemListComponent() {
        const item = document.createElement('div')
        item.classList.add('item', 'pointer')
        item.addEventListener('click', () => { this.openItem() })

        const preview = document.createElement('div')
        preview.classList.add('preview')
        item.append(preview)

        const render = document.createElement('div')
        render.classList.add('rc-item', `rc-${this.item}`)
        if (this.enchants) render.classList.add('rc-enchanted')
        if (this.tint) render.setAttribute('style', `--rc-layer-1-tint: ${this.tint}`)
        preview.appendChild(render)

        const name = document.createElement('div')
        name.classList.add('name')
        name.innerText = this.name
        item.append(name)

        const rarity = document.createElement('div')
        rarity.classList.add('rarity'.split(' ').join('_'))
        if (this.location) {
            rarity.innerHTML = `<span class="location ${this.location.split(' ').join('_')}">${this.location}</span>&nbsp;${this.rarity}`
        } else {
            rarity.innerText = this.rarity
        }
        item.append(rarity)

        return item
    }

    public addToList(rarity: string) {
        document.getElementsByClassName(`list ${rarity.split(' ').join('_')}`)[0].appendChild(this.getItemListComponent())
    }

    public openItem() {
        console.log(this)
    }
}