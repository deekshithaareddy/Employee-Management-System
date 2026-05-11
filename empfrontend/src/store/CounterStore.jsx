import { create } from "zustand"

export const useCounterStore=create((set)=>({
    // state
    newCounter:0,
    newCounter1:100,
    // add user stae(name,email,age)
    user:{name:"ravi",email:"ravi@mail.com",age:21},
    // function to change email
    changeEmail:()=>set({...user,email:"test@mail.com"}),
    // function to change name and age
    changeName:()=>set({...user,name:"bhanu",age:23}),
    // functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    changeCounter:()=>set({newCounter:500}),
    incrementCounterby20:()=>set(state=>({newCounter:state.newCounter+20}))
}))