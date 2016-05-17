const skillArray = [
	{
		name: 'Archery',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Automatics',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Blades',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Clubs',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Escape Artist',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Exotic Melee Weapon',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Exotic Range Weapon',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Gunnery',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Gymnastics',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Heavy Weapons',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Locksmith',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Longarms',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Palming',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Pistols',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Sneaking',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Throwing Weapon',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Unarmed Combat',
		points: 0, attribute: 'agility',
		canDefault: true
	},
	{
		name: 'Diving',
		points: 0, attribute: 'body',
		canDefault: true
	},
	{
		name: 'Free-Fall',
		points: 0, attribute: 'body',
		canDefault: true
	},
	{
		name: 'Pilot Aerospace',
		points: 0, attribute: 'reaction',
		canDefault: false

	},
	{
		name: 'Pilot Aircraft',
		points: 0, attribute: 'reaction',
		canDefault: false
	},
	{
		name: 'Pilot Walker',
		points: 0, attribute: 'reaction',
		canDefault: false
	},
	{
		name: 'Pilot Exotic Vehicle',
		points: 0, attribute: 'reaction',
		canDefault: false
	},
	{
		name: 'Pilot Ground Craft',
		points: 0, attribute: 'reaction',
		canDefault: true

	},
	{
		name: 'Pilot Watercraft',
		points: 0, attribute: 'reaction',
		canDefault: true
	},
	{
		name: 'Running',
		points: 0, attribute: 'strength',
		canDefault: true
	},
	{
		name: 'Swimming',
		points: 0, attribute: 'strength',
		canDefault: true
	},
	{
		name: 'Con',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Etiquette',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Instruction',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Intimidation',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Leadership',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Negotiation',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Performance',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Impersonation',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Animal Handling',
		points: 0, attribute: 'charisma',
		canDefault: true
	},
	{
		name: 'Artisan',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Assensing',
		points: 0, attribute: 'intuition',
		canDefault: false
	},
	{
		name: 'Disguise',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Interests Knowledge',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Language',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Navigation',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Perception',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Street Knowledge',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Tracking',
		points: 0, attribute: 'intuition',
		canDefault: true
	},
	{
		name: 'Academic Knowledge',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Aeronautics Mechanics',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Arcane',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Armorer',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Automotive Mechanics',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Biotechnology',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Chemistry',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Computer',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Cybertechnology',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Cybercombat',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Demolitions',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Electronic Warfare',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'First Aid',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Industrial Mechanics',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Hacking',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Hardware',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Medicine',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Nautical Mechanics',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Professional Knowledge',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Software',
		points: 0, attribute: 'logic',
		canDefault: false
	},
	{
		name: 'Forgery',
		points: 0, attribute: 'logic',
		canDefault: true
	},
	{
		name: 'Astral Combat',
		points: 0, attribute: 'willpower',
		canDefault: false
	},
	{
		name: 'Survival',
		points: 0, attribute: 'willpower',
		canDefault: true
	},
	{
		name: 'Alchemy',
		points: 0, attribute: 'magic',
		canDefault: true
	},
	{
		name: 'Artificing',
		points: 0, attribute: 'magic',
		canDefault: true
	},
	{
		name: 'Banishing',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Binding',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Counterspelling',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Ritual Spellcasting',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Spellcasting',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Summoning',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Enchanting',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Disenchanting',
		points: 0, attribute: 'magic',
		canDefault: false
	},
	{
		name: 'Compiling',
		points: 0, attribute: 'resonance',
		canDefault: false
	},
	{
		name: 'Decompiling',
		points: 0, attribute: 'resonance',
		canDefault: false
	},
	{
		name: 'Registering',
		points: 0, attribute: 'resonance',
		canDefault: false
	}
];
const skillMap = {
	archery: skillArray[0],
	automatics: skillArray[1],
	blades: skillArray[2],
	clubs: skillArray[3],
	escapeArtist: skillArray[4],
	exoticMeleeWeapon: skillArray[5],

	exoticRangeWeapon: skillArray[6],
	gunnery: skillArray[7],
	gymnastics: skillArray[8],
	heavyWeapons: skillArray[9],
	locksmith: skillArray[10],
	longarms: skillArray[11],
	palming: skillArray[12],
	pistols: skillArray[13],
	sneaking: skillArray[14],
	throwingWeapon: skillArray[15],
	unarmedCombat: skillArray[16],
	diving: skillArray[17],
	freeFall: skillArray[18],
	pilotAerospace: skillArray[19],
	pilotAircraft: skillArray[20],
	pilotWalker: skillArray[21],
	pilotExoticVehicle: skillArray[22],
	pilotGroundCraft: skillArray[23],
	pilotWatercraft: skillArray[24],
	running: skillArray[25],
	swimming: skillArray[26],
	con: skillArray[27],
	etiquette: skillArray[28],
	instruction: skillArray[29],
	intimidation: skillArray[30],
	leadership: skillArray[31],
	negotiation: skillArray[32],
	performance: skillArray[33],
	impersonation: skillArray[34],
	animalHandling: skillArray[35],
	artisan: skillArray[36],
	assensing: skillArray[37],
	disguise: skillArray[38],
	interestsKnowledge: skillArray[39],
	language: skillArray[40],
	navigation: skillArray[41],
	perception: skillArray[42],
	streetKnowledge: skillArray[43],
	tracking: skillArray[44],
	academicKnowledge: skillArray[45],
	aeronauticsMechanics: skillArray[46],
	arcane: skillArray[47],
	armorer: skillArray[48],
	automotiveMechanics: skillArray[49],
	biotechnology: skillArray[50],
	chemistry: skillArray[51],
	computer: skillArray[52],
	cybertechnology: skillArray[53],
	cybercombat: skillArray[54],
	demolitions: skillArray[55],
	electronicWarfare: skillArray[56],
	firstAid: skillArray[57],
	industrialMechanics: skillArray[58],
	hacking: skillArray[59],
	hardware: skillArray[60],
	medicine: skillArray[61],
	nauticalMechanics: skillArray[62],
	professionalKnowledge: skillArray[63],
	software: skillArray[64],
	Forgery: skillArray[65],
	astralCombat: skillArray[66],
	survival: skillArray[67],
	alchemy: skillArray[68],
	artificing: skillArray[69],
	banishing: skillArray[70],
	binding: skillArray[71],
	counterspelling: skillArray[72],
	ritualSpellcasting: skillArray[73],
	spellcasting: skillArray[74],
	summoning: skillArray[75],
	enchanting: skillArray[76],
	disenchanting: skillArray[77],
	compiling: skillArray[78],
	decompiling: skillArray[79],
	registering: skillArray[80]
};
export default {
	skillArray,
	skillMap
}
