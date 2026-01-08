export interface ChallengeMeta {
    title: string
    category: string
    difficulty: string
    points: number
    visible: boolean
}

export interface Challenge {
    id: string
    meta: ChallengeMeta
}