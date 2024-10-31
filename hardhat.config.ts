require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.20",
                settings: {
                    // Optional settings
                },
            },
            {
                version: "0.8.27",
                settings: {
                    // Optional settings
                },
            },
        ],
    },
    networks: {
      holesky: {
        url: "https://multi-special-river.ethereum-holesky.quiknode.pro/7cd4fd3e455fb885b18ca70c3df77de484fa5248",
        accounts: ["2fbd7ec14567795bac213d6e4202b9fc6deea6a73276f68d05a15d0836b1bb51"]
    },
    },
};

