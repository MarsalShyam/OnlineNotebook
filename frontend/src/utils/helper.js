// export const validateEmail=(email)=>{
//     const regex=/^[^\s@]+@[^\s@]+\.[^s@]+$/;
//     return regex.test(email);
// }
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};
