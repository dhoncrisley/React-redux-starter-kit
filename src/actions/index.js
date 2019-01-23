

export const something = () => {
    return (dispatch, getState) => {
        console.log('something action')
        dispatch({ type: 'SOMETHING_ELSE', payload: 'Something string' })
    }
}