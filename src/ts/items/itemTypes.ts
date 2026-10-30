export type rarity = 'semi' | 'epic' | 'ultra' | 'ultra legend' | 'legendary' | 'fabled' | 'mythical' | 'extinct' | 'vote rare' | 'creature' | 'fishing special' | 'leaderboard' | 'politics special' | 'pet special'
export const rarityList = ['semi', 'epic', 'ultra', 'ultra legend', 'legendary', 'fabled', 'mythical', 'extinct', 'vote rare', 'creature', 'fishing special', 'leaderboard', 'politics special', 'pet special']
export type location = 'cartoon' | 'spongebob' | 'adventure time' | 'avatar earth' | 'avatar water' | 'avatar fire' | 'avatar air'
export type tag = 'mining' | 'lopping' | 'fishing' | 'farming' | 'looting' | 'pvp' | 'arcade' | 'misc'

export type itemSettings = {
    name: string
    rarity: rarity
    location?: location
    map: string
    item: string
    enchants?: Array<string>
    tint?: string
    hints: Array<string>
    tags: Array<tag>
}