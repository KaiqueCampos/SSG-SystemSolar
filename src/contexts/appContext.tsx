import { createContext, ReactNode, useContext, useState } from 'react'

type Star = {
    id: string;
    name: string;
    diameter: string;
    distanceFromSun: string;
    image: string;
    description: string;
    satellites: string;
    moons: string;
    color: string;
    temperature: string
}

type AppContextData = {
    stars : Star[];
    getStars: (stars : Star[]) => void;

}

export const AppContext = createContext({} as AppContextData)

type AppContextProviderProps={
    children : ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    //variables
    const [stars, setStars] = useState([])

    //get all stars and set to variable
    function getStars(stars: Star[]){
        setStars(stars)
    }

    return (
        <AppContext.Provider
            value={{
                stars,
                getStars,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    return useContext(AppContext)
}


