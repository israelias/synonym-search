export interface Root {
  meta: Meta
  hwi: Hwi
  fl: string
  def: Def[]
  uros?: Uro[] // Dictionary API
  et?: string[][] // Dictionary API
  date?: string // Dictionary API
  ld_link?: LdLink // Dictionary API
  suppl?: Suppl // Dictionary API
  shortdef: string[]
}

export interface Meta {
  id: string
  uuid: string
  sort?: string // Dictionary API
  src: string
  section: string
  target?: Target // Thesaurus API
  stems: string[]
  syns?: string[][] // Thesaurus API
  ants?: any[] // Thesaurus API
  offensive: boolean
}

export interface Target {
  tuuid: string
  tsrc: string
}

export interface Hwi {
  hw: string
  prs?: Pr[] // Dictionary API
}

export interface Pr {
  mw: string
  sound: Sound
}

export interface Sound {
  audio: string
  ref: string
  stat: string
}

export interface Uro {
  ure: string
  fl: string
}

export interface LdLink {
  link_hw: string
  link_fl: string
}

export interface Suppl {
  examples: Example[]
  ldq: Ldq
}

export interface Example {
  t: string
}

export interface Ldq {
  ldhw: string
  fl: string
  def: Def[]
}

export interface Def {
  vd?: VerbDivider // Dictionary API
  sls?: string[] // Dictionary API
  sseq: ["sense", Sseq][][]
}

/**
 * Verb Divider: vd
 * The verb divider acts as a functional label in verb entries, introducing the separate sense sequences for transitive and intransitive meanings of the verb.
 * Typically displays in italics.
 */
export type VerbDivider = string

export interface Sseq {
  sn?: string // Dictionary API
  dt: DefiningText
  sdsense?: DividedSense[] // Dictionary API
  syn_list: SynList[][] // Thesaurus API
  rel_list: RelList[][] // Thesaurus API
}

/**
 * Divided Sense: sdsense
 * A sense may be divided into two parts to show a particular relationship between two closely related meanings. The second part of the sense is contained in an sdsense, consisting of an sense divider sd along with a second dt.
 * et, ins, lbs, prs, sgram, sls, vrs	(optional)
 */
export interface DividedSense {
  sd: string
  dt: DefiningText
}

/**
 * Defining Text: dt
 * The defining text is the text of the definition or translation for a particular sense. Defining text is contained in dt.
 * optional bnw, ca, ri, snote, uns, or vis elements
 */
export type DefiningText = [string, any][]

export interface Etymology {

}

export interface SynList {
  wd: string
}

export interface RelList {
  wd: string
}
