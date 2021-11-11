function onHover(passive_name){
	let passive = void_gauntlet[passive_name];
	let str = `<h6>${passive_name.toUpperCase().replace(/_/g, " ")}</h6>`;
	if(passive.cooldown) {
		str += `<p>Cooldown: ${passive.cooldown}</p>`;
	}
	str += `<p>${passive.description}</p>`;
	document.getElementById('description').innerHTML = str;
}

const void_gauntlet = {
	"oblivion" : {
		cooldown: 19.5,
		description: "Summon a circular rift of Void energy at your feet that deals 30% weapon damage per second to enemies and grants Empower to self and friendlies, increasing damage by 20%. 5m radius. 6s duration. Costs 30 Mana."
	},
    "void_blade": {
		description: ""
	},
    "petrifying_scream": {
		description: ""
	},
    "baleful_tether": {
		description: ""
	},
    "orb_of_decay": {
		description: ""
	},
    "essence_rupture": {
		description: ""
	},
    "withering_oblivion": {
		description: ""
	},
    "invigorating_oblivion": {
		description: ""
	},
    "keen_confidence": {
		description: ""
	},
    "refreshing_precision": {
		description: ""
	},
    "efficient_harvest": {
		description: ""
	},
    "leeching_agony": {
		description: ""
	},
    "foresaken_pact": {
		description: ""
	},
    "empowering_proximity": {
		description: ""
	},
    "refreshing_frailty": {
		description: ""
	},
    "fortified_blade": {
		description: ""
	},
    "vicious_void": {
		description: ""
	},
    "leeching_blade": {
		description: ""
	},
    "keen_humility": {
		description: ""
	},
    "bone-chilling_voice": {
		description: ""
	},
    "fortifying_echos": {
		description: ""
	},
    "voidcaller": {
		description: ""
	},
    "deadly_range": {
		description: ""
	},
    "fervent_thirst": {
		description: ""
	},
    "radiant_efficiency": {
		description: ""
	},
    "refreshing_harvest": {
		description: ""
	},
    "draining_orb": {
		description: ""
	},
    "tethered_refresh": {
		description: ""
	},
    "tethered_focus": {
		description: ""
	},
    "soul_eater": {
		description: ""
	},
    "leeching_bolts": {
		description: ""
	},
    "slowing_orb": {
		description: ""
	},
    "detonating_orb": {
		description: ""
	},
    "extended_suffering": {
		description: ""
	},
    "invigorating_rupture": {
		description: ""
	},
    "overflowing_essence": {
		description: ""
	},
    "mending_evasion": {
		description: ""
	},
    "glimpse_of_the_void": {
		description: ""
	}
}