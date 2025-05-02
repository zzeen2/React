import {useContext} from 'react'
import { LoginStore } from './Store/Store'
import { Layout } from './Content.styled'


const A = () => {
    const {name} = useContext(LoginStore)
    return (
        <Layout>
            {name}
        </Layout>
    )
}

export default A
