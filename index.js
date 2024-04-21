let nftCount = 0;
const nfts = [];

function mintNFT(name, description, image) {
  const newNFT = { name, description, image };
  nfts.push(newNFT);
  nftCount++;
}

function listNFTs() {
  nfts.forEach(nft => {
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
  });
}

function getTotalSupply() {
  return nftCount;
}

mintNFT("Golden Yunnie", "Very Beautiful Statue of Lord Yunnie", "YunnieNFT.jpg")
mintNFT("Red Lily", "This is Lucky Red Lily!!", "RedLilyNFT.jpg");
mintNFT("Diamond Sword", "Diamond Sword for Battling!!", "DiamondSwordNFT.jpg");

listNFTs();
console.log("Total NFTs minted: " + getTotalSupply());