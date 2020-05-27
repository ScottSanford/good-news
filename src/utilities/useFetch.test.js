import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from './useFetch'
import mockData from './mock-data'


test('useFetch() should return some mock data', () => {

	const { result } = renderHook(() => useFetch('apiUrl'))

	act(() => {
		result.current.setResponse(mockData)
	})

	expect(result.current.response).toBe(mockData)
})

test('useFetch() should return an error', () => {

	const { result } = renderHook(() => useFetch('apiUrl'))

	act(() => {
		result.current.setError('API Error')
	})

	expect(result.current.error).toBe('API Error')
})
