describe('A mock function has been called multiply times',()=>{


  let counter = 0
  let mockFn = jest.fn(()=>{
    counter ++ 
    return counter
  })

  mockFn(1)
  mockFn('a', 'b')


  test('with parameters ',()=>{ 
    console.log(mockFn.mock.calls)
    expect(mockFn.mock.calls).toEqual([[1], ['a', 'b']]) 
  }) 

  test('Giving results',()=>{

    console.log(mockFn.mock.results)
    expect(mockFn.mock.results).toEqual([
      {type:'return', value: 1 },
      {type:'return', value: 2 }
    ]) 
  })

  console.log("instances: ", mockFn.mock.instances) 
})
