import React from 'react'

// Higher Order Component that returns either a Small or Large Article Card.
const WrappedGridArticle = (WrappedComponent: any, passThroughProps: any) => {

	return <WrappedComponent {...passThroughProps} />
}

export default WrappedGridArticle

