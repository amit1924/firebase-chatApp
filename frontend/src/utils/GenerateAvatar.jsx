import seedrandom from "seedrandom";

/** @description Class to generate avatars */
class AvatarGenerator {
  constructor() {}

  /** @description Generates random avatar image URL
   * @param {string} [seed] - Optional seed for randomization
   * @returns {string} Random avatar image URL
   */
  generateRandomAvatar(seed) {
    let topTypeOptions = [
      "NoHair",
      "Eyepatch",
      "Hat",
      "Hijab",
      "Turban",
      "WinterHat1",
      "WinterHat2",
      "WinterHat3",
      "WinterHat4",
      "LongHairBigHair",
      "LongHairBob",
      "LongHairBun",
      "LongHairCurly",
      "LongHairCurvy",
      "LongHairDreads",
      "LongHairFrida",
      "LongHairFro",
      "LongHairFroBand",
      "LongHairNotTooLong",
      "LongHairShavedSides",
      "LongHairMiaWallace",
      "LongHairStraight",
      "LongHairStraight2",
      "LongHairStraightStrand",
      "ShortHairDreads01",
      "ShortHairDreads02",
      "ShortHairFrizzle",
      "ShortHairShaggyMullet",
      "ShortHairShortCurly",
      "ShortHairShortFlat",
      "ShortHairShortRound",
      "ShortHairShortWaved",
      "ShortHairSides",
      "ShortHairTheCaesar",
      "ShortHairTheCaesarSidePart",
    ];

    let accessoriesTypeOptions = [
      "Blank",
      "Kurt",
      "Prescription01",
      "Prescription02",
      "Round",
      "Sunglasses",
      "Wayfarers",
    ];

    let facialHairTypeOptions = [
      "Blank",
      "BeardMedium",
      "BeardLight",
      "BeardMagestic",
      "MoustacheFancy",
      "MoustacheMagnum",
    ];

    let facialHairColorOptions = [
      "Auburn",
      "Black",
      "Blonde",
      "BlondeGolden",
      "Brown",
      "BrownDark",
      "Platinum",
      "Red",
    ];

    let clotheTypeOptions = [
      "BlazerShirt",
      "BlazerSweater",
      "CollarSweater",
      "GraphicShirt",
      "Hoodie",
      "Overall",
      "ShirtCrewNeck",
      "ShirtScoopNeck",
      "ShirtVNeck",
    ];

    let eyeTypeOptions = [
      "Close",
      "Cry",
      "Default",
      "Dizzy",
      "EyeRoll",
      "Happy",
      "Hearts",
      "Side",
      "Squint",
      "Surprised",
      "Wink",
      "WinkWacky",
    ];

    let eyebrowTypeOptions = [
      "Angry",
      "AngryNatural",
      "Default",
      "DefaultNatural",
      "FlatNatural",
      "RaisedExcited",
      "RaisedExcitedNatural",
      "SadConcerned",
      "SadConcernedNatural",
      "UnibrowNatural",
      "UpDown",
      "UpDownNatural",
    ];

    let mouthTypeOptions = [
      "Concerned",
      "Default",
      "Disbelief",
      "Eating",
      "Grimace",
      "Sad",
      "ScreamOpen",
      "Serious",
      "Smile",
      "Tongue",
      "Twinkle",
      "Vomit",
    ];

    let skinColorOptions = [
      "Tanned",
      "Yellow",
      "Pale",
      "Light",
      "Brown",
      "DarkBrown",
      "Black",
    ];

    let hairColorTypes = [
      "Auburn",
      "Black",
      "Blonde",
      "BlondeGolden",
      "Brown",
      "BrownDark",
      "PastelPink",
      "Platinum",
      "Red",
      "SilverGray",
    ];

    let hatColorOptions = [
      "Black",
      "Blue01",
      "Blue02",
      "Blue03",
      "Gray01",
      "Gray02",
      "Heather",
      "PastelBlue",
      "PastelGreen",
      "PastelOrange",
      "PastelRed",
      "PastelYellow",
      "Pink",
      "Red",
      "White",
    ];

    let clotheColorOptions = [
      "Black",
      "Blue01",
      "Blue02",
      "Blue03",
      "Gray01",
      "Gray02",
      "Heather",
      "PastelBlue",
      "PastelGreen",
      "PastelOrange",
      "PastelRed",
      "PastelYellow",
      "Pink",
      "Red",
      "White",
    ];

    const rng = seed ? seedrandom(seed) : seedrandom();

    return `https://avataaars.io/?accessoriesType=${
      accessoriesTypeOptions[Math.floor(rng() * accessoriesTypeOptions.length)]
    }&avatarStyle=Circle&clotheColor=${
      clotheColorOptions[Math.floor(rng() * clotheColorOptions.length)]
    }&clotheType=${
      clotheTypeOptions[Math.floor(rng() * clotheTypeOptions.length)]
    }&eyeType=${
      eyeTypeOptions[Math.floor(rng() * eyeTypeOptions.length)]
    }&eyebrowType=${
      eyebrowTypeOptions[Math.floor(rng() * eyebrowTypeOptions.length)]
    }&facialHairColor=${
      facialHairColorOptions[Math.floor(rng() * facialHairColorOptions.length)]
    }&facialHairType=${
      facialHairTypeOptions[Math.floor(rng() * facialHairTypeOptions.length)]
    }&hairColor=${
      hairColorTypes[Math.floor(rng() * hairColorTypes.length)]
    }&hatColor=${
      hatColorOptions[Math.floor(rng() * hatColorOptions.length)]
    }&mouthType=${
      mouthTypeOptions[Math.floor(rng() * mouthTypeOptions.length)]
    }&skinColor=${
      skinColorOptions[Math.floor(rng() * skinColorOptions.length)]
    }&topType=${topTypeOptions[Math.floor(rng() * topTypeOptions.length)]}`;
  }
}

/** @description Generates a random avatar URL */
export const GenerateAvatar = (seed) => {
  const avatarGenerator = new AvatarGenerator();
  return avatarGenerator.generateRandomAvatar(seed);
};
