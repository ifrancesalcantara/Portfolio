const commonStyles = {
    fonts:{
        first: ""
    },
    projects:{
        paintapop:{color:"#fff59d"},
        hoodie:{color:"#9fa8da"},
        bombard:{color:"lightgray"},
        //PORTFOLIO COLOR IN THEME
    },
    buttons:[
        {
            color:"#e60000"
        }
    ]
}


export const lightTheme = {
    ...commonStyles,
    name:"light",
    primary:"white",
    primary_transparent:"rgba(183,197,226,0.5)",
    primary_transparent_opposite:"rgba(0,0,25,.7)",
    primary_transparent2:"rgba(255,255,255,.3)",
    secondary:"gray",
    button:{
        hover:"lightgray",
        click:"turquoise"
    },
    text:"black"
}

export const darkTheme = {
    ...commonStyles,
    name:"dark",
    primary:"gray",
    primary_transparent:"rgba(0,0,25,.7)",
    primary_transparent_opposite:"rgba(255,255,255,.5)",
    primary_transparent2:"rgba(0,0,25,.5)",
    secondary:"light-blue",
    button:{
        hover:"rgba(2, 119, 189,.5)",
        click:"#08104B"
    },
    text:"white"
}