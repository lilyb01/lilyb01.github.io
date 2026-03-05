// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  //ATM Star - Create
  allthemods
    .custom({
      type: "create:mechanical_crafting",
      accept_mirrored: false,
      category: "misc",
      key: {
        A: {
          item: "allthemodium:unobtainium_allthemodium_alloy_block",
        },
        B: {
          item: "allthetweaks:nexium_emitter",
        },
        C: {
          item: "allthetweaks:dragon_soul",
        },
        D: {
          item: "allthetweaks:withers_compass",
        },
        E: {
          item: "allthetweaks:pulsating_black_hole",
        },
        F: {
          item: "allthetweaks:oblivion_shard",
        },
        G: {
          item: "allthetweaks:improbable_probability_device",
        },
        H: {
          item: "allthetweaks:dimensional_seed",
        },
        I: {
          item: "allthetweaks:patrick_star",
        },
        J: {
          item: "allthecompressed:nether_star_block_3x",
        },
        K: {
          item: "allthetweaks:philosophers_fuel",
        },
        L: {
          item: "mysticalagradditions:creative_essence",
        },
        M: {
          item: "cobblemon:master_ball",
        },
      },
      pattern: [
        "    A    ",
        "   AJA   ",
        "AAAJFJAAA",
        "AJJCDEJJA",
        " AMBIHMA ",
        "  AKGLA  ",
        " AJJAJJA ",
        "AJJA AJJA",
        "AAA   AAA",
      ],
      result: {
        count: 1,
        id: "allthetweaks:atm_star",
      },
      show_notification: false,
    })
    .id("allthetweaks:allthetweaks/atm_star");

  //Patric Star - Create
  allthemods
    .custom({
      type: "create:mechanical_crafting",
      accept_mirrored: false,
      category: "misc",
      key: {
        A: {
          item: "minecraft:magenta_concrete",
        },
        B: {
          item: "minecraft:pink_concrete",
        },
        C: {
          item: "minecraft:pink_concrete_powder",
        },
        D: {
          item: "minecraft:green_concrete",
        },
        E: {
          item: "minecraft:green_concrete_powder",
        },
        F: {
          item: "minecraft:lime_concrete",
        },
        F: {
          item: "minecraft:lime_concrete",
        },
        F: {
          item: "minecraft:lime_concrete",
        },
        G: {
          item: "minecraft:magenta_concrete_powder",
        },
      },
      pattern: [
        "    B    ",
        "   BCA   ",
        "BBBGCABBB",
        "ACGCGGGCA",
        " AAGGGBA ",
        "  EDDDE  ",
        " EFEDEFE ",
        "BEDD DDEB",
        "AAA   AAA",
      ],
      result: {
        count: 1,
        id: "allthetweaks:patrick_star",
      },
      show_notification: false,
    })
    .id("allthetweaks:allthetweaks/patrick_star");
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
