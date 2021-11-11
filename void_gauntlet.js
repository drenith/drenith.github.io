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
		cooldown: 25,
		description: "Summon a blade of Void energy that converts your basic attacks to melee. Tap Basic Attack to perform a quick slash that deals 100% weapon damage or hold to perform a thrust attack that deals 150% weapon damage. Both attacks inflict Disintegrate on successful hits, dealing 5% weapon damage per second and reducing damage absorption by 5% for 8s. Stacks 3 times. 15s duration"
	},
    "petrifying_scream": {
		cooldown: 15.0,
		description: "Unleash a Void-infused scream, dealing 100% weapon damage and inflicting Root to enemies 5m in front of you, disabling their movement for 2s ."
	},
    "baleful_tether": {
		description: "Fire a projectile that tethers you to an enemy, Weakening it and Empowering you by {}% per second ({}% maximum). The tether ends if the target moves beyond 10m. {}s duration."
	},
    "orb_of_decay": {
		description: "Fire an unblockable orb that passes through enemies and inflicts Disintegrate, dealing {}% weapon damage per second and reducing damage absorption by {}% for {}s. At max range, it transforms into a healing orb and returns, healing friendlies for {}% weapon damage per second for {}s."
	},
    "essence_rupture": {
		description: "Fire a projectile that inflicts Essence Rupture for {} seconds, healing anyone that hits the target for {}% of the damage done."
	},
    "withering_oblivion": {
		description: "Your attacks inflict Weaken to targets inside the radius, reducing their damage by 5% for 5s per hit. Stacks up to 3 times."
	},
    "invigorating_oblivion": {
		description: "+15 stamina per second for self and friendlies while inside the radius"
	},
    "keen_confidence": {
		description: "+10% crit chance while over 50% hp"
	},
    "refreshing_precision": {
		description: "10% cooldown reduction on all abilities on critical hit"
	},
    "efficient_harvest": {
		description: "Harvest essence health drain is reduced by 50% while below 25% mana"
	},
    "leeching_agony": {
		description: "On critical hit, gain health equal to 15% of damage done"
	},
    "foresaken_pact": {
		description: "+10% damage while below 50% mana"
	},
    "empowering_proximity": {
		description: "Gain empower when casting abilities within 5m of an enemy increasing damage by 10% for 5s. Stacks up to 3 times"
	},
    "refreshing_frailty": {
		description: "+5% cooldown reduction on all abilities when successfully hitting enemies afflicted by 3 or more debuff stacks (can be from different debuffs)"
	},
    "fortified_blade": {
		description: "20% fortify for 5 seconds on start"
	},
    "vicious_void": {
		description: "+10% crit damage on void blade attacks"
	},
    "leeching_blade": {
		description: "Successful thrust attacks heal self for 5% weapon damage per Disintegrate stack on target. Scales exclusively with focus."
	},
    "keen_humility": {
		description: "+10% crit chance while all abilities are on cooldown"
	},
    "bone-chilling_voice": {
		description: "root duration increased by 1s on targets below 50% health"
	},
    "fortifying_echos": {
		description: "10% fortify for 10s for each enemy hit. Stacks up to 3 times"
	},
    "voidcaller": {
		description: "On successful ability hit, gain a stack of Void Essence. At 6 stacks, consume all stacks and gain a 3m aura on self that heals friendlies for 30% weapon damage and deals 30% weapon damage per second to enemies within. 5s duration. 20s cooldown."
	},
    "deadly_range": {
		description: "+10% damage on successful ranged heavy attacks against targets more than 8m away"
	},
    "fervent_thirst": {
		description: "+5% mana per light attack against targets afflicted by your void gauntlet debuffs"
	},
    "radiant_efficiency": {
		description: "Mana costs are reduced by 25% while above 50% mana"
	},
    "refreshing_harvest": {
		description: "Cooldowns are reduced by 10% per second while performing Harvest Essence"
	},
    "draining_orb": {
		description: "Gain 5% mana for each enemy hit by the orb"
	},
    "tethered_refresh": {
		description: "Successful hits against the tethered target reduce other void gauntlet cooldowns by 5%"
	},
    "tethered_focus": {
		description: "+100% mana regen while tether is active"
	},
    "soul_eater": {
		description: "Regain 80% weapon damage as health if the tethered target dies. Scales exclusively with focus."
	},
    "leeching_bolts": {
		description: "Healing from ranged heavy attacks is increased by an additional 30% of damage dealth if target is below 50% health"
	},
    "slowing_orb": {
		description: "The orb slows enemies already afflicted by any debuff, reducing their movement speed by 30% for 3s"
	},
    "detonating_orb": {
		description: "Press the ability input again to detonate the orb with a {}m explosion radius. Depending on the orb’s phase, the explosion will either damage enemies for {}% weapon damage and apply a stack of Disintegrate or heal friendlies for {}% weapon damage."
	},
    "extended_suffering": {
		description: "Successful heavy ranged attacks increase the duration of non-crowd control debuffs you have applied by 10%"
	},
    "invigorating_rupture": {
		description: "Players additional receive 15 stamina when hitting the afflicted target"
	},
    "overflowing_essence": {
		description: "Friendlies within 4m of the afflicted target are healed for 80% of your weapon damage when Essence Rupture ends."
	},
    "mending_evasion": {
		description: "Dodging with full mana heals you for 80% weapon damage. Scales exclusively with focus. 20s cooldown"
	},
    "glimpse_of_the_void": {
		description: "Gain a stack of Void Essence per successful ability hit. At {} or more stacks, your next successful heavy attack will instantly reset all Void Gauntlet cooldowns and remove all stacks."
	}
}