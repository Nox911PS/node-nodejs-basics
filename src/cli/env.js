const parseEnv = () => {
    const variables = process.env;
    const filteredVariablesKeys = Object.keys(variables).filter((item) => item.startsWith('RSS_'));

    console.log(filteredVariablesKeys.map((item, index ,array) => `${item}=${variables[item]};`).join(' '));
};

parseEnv();