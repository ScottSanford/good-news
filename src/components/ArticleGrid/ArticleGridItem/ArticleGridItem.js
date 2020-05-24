import React from 'react'

// Higher Order Component that returns either an ExplicitGridItem or ImplicitGridItem
const WrappedArticleGridItem = (WrappedComponent, passThroughProps) => {

	return <WrappedComponent {...passThroughProps} />
}

export default WrappedArticleGridItem