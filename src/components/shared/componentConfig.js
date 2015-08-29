const components = {
    button: {
        defaultProps: {
        }
    },

    pager: {
        defaultProps: {
            perPage: 50,
            recordCount: 300
        }
    }        
}

module.exports = {
    getAll(){
        return components;
    },

    get(name){
        let conf = components[name];
        if(conf){
            return conf;
        } else {
            console.warn("component: " + name + " wasn't found. Check the spelling");
            return {};
        }
    }
};