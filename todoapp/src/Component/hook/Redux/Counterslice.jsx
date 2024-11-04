import counterslice from '@reduxjs/toolkit'

export const counterslice = Createslice({
         name:'count',
         initialstate:{
            value:10
         },
         reducers:{
           increment:(state)=>{
               state.value +=1
           }
         }
})