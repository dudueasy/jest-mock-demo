import * as math from './math.js' 
jest.mock('./math.js')

describe('mocking a module', ()=>{ 
  test('allow us to check how a modules funcion is called', ()=>{

    const add = (a,b)=>{
      math.add(a,b) 
    }


    add(1,2) 
    expect(math.add).toHaveBeenCalled()
    expect(math.add).toHaveBeenCalledWith(1,2)
  })

})



