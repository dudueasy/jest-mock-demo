import moxios from 'moxios'
import axios from 'axios'

describe('Make a axios request with moxios',()=>{ 
  beforeEach(()=>{
    moxios.install();
  })

  afterEach(()=>{
    moxios.uninstall();
  })

  test('should return a mocked value',()=>{
    const mockedValue = {text: 'success'} 

    // moxios 开始监听请求.
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: mockedValue,
        // response: 1,  // to check if test fail
      }); 
    });


    return axios.get('whatever').then(response=>{

      console.log('mocked response: ', response)
      expect(response.data).toEqual(mockedValue)

    })

  }) 
})
