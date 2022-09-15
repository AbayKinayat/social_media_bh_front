import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch;