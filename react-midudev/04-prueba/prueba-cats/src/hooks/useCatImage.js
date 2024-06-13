import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]
        const size = 50
        const color = 'white'
        const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=${size}&color=${color}`

        fetch(CAT_ENDPOINT_IMAGE_URL)
            .then(res => res.json)
        setImageUrl(CAT_ENDPOINT_IMAGE_URL)

    }, [fact])

    return { imageUrl }


}

