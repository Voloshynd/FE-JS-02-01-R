function isMaleName(name) {
  // Zaimplementuj zadanie zgodnie z wytycznymi
return (name[name.length-1] === 'a' ^ name ==="Bonawentura") ? false : true;
}
isMaleName("Ala");
isMaleName("Jacek");
isMaleName("Bonawentura");

module.exports = isMaleName;
