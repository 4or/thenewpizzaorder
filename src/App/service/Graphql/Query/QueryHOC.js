import React, { Component, Fragment} from 'react';
import { Mutation } from 'react-apollo'


const HOC_COMP = (Componentone,query1) => {

    class HOC extends Component {
        render(){
            return(
                <Fragment>
                    <Mutation query={query1}>
                        {
                            (submitOrder,{loading,error,data}) => {
                                if(loading) return 'loadin....'
                                if(error) return ''
                                if(!loading ){
                                    return <Componentone data={data} loading={loading} error={error}  submitFunc={submitOrder}/>
                                }
                            }
                        }
                    </Mutation>
                </Fragment>
            )
        }
    }
    return HOC
}

export default HOC_COMP