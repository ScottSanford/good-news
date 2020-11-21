import React from 'react'

// Higher Order Component that returns either a Small or Large Article Card.
const WrappedGridArticle = (WrappedComponent: React.FC, passThroughProps: any) => {

	return <WrappedComponent {...passThroughProps} />
}

export default WrappedGridArticle

