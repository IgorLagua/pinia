export default () => {
    
    const cpfMask = reactive({
        mask: "###.###.###-##",
    })

    const celPhoneMask = reactive({
        mask: "(##) #####-####",
    })

    return {
        cpfMask,
        celPhoneMask,
    }
}