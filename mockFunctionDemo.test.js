describe('mock function name',()=>{
  const foo = ()=>{ return 'bar' } 
  const mockFunctionName  = 'whatever'

  test('function whatever should be called',()=>{
    let mock = jest.fn(foo).mockName(mockFunctionName)

    mock()

    expect(mock).toHaveBeenCalled()

    // this assertion will also error 
    // as whatever is not defined
    // expect(whatever).toHaveBeenCalled() 
  }) 
})

describe.only('use mockfn as function callback',()=>{
  test('mockfn should have been called',()=>{
    const add = (a, b, callback)=>{
      return callback(a+b)
    }

    let mock = jest.fn()

    add(1,2,mock)
    expect(mock).toHaveBeenCalledWith(3) 
  })
})

