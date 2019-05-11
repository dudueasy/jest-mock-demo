import * as math from './math'

test("track math.add",()=>{
  const addMock = jest.spyOn(math, "add") 

  const add = (a,b)=>{
    return math.add(a,b) 
  } 

  expect(add(1,2)).toBe(3) 
  expect(addMock).toHaveBeenCalledWith(1,2) 
}) 




test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(math.add(1, 2)).toEqual("mock");


  // mockReset will clean mockFn implementation into null
  addMock.mockReset()
  // expect(math.add(1,2)).toBe(3)
  expect(math.add(1,2)).toBeUndefined()


  // restore the original implementation
  addMock.mockRestore();
  expect(math.add(1, 2)).toEqual(3);
});
