const parseArgs = () => {
    const args = process.argv.slice(2);

    console.log(args.map((item, index) => index%2 ? `is ${item},` : item.slice(2)).join(' '));
};

parseArgs();