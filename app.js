let burger_menu = document.querySelector('.burger_menu')
let navbar = document.querySelector('.navbar')
burger_menu.onclick = () =>{
    navbar.classList.toggle('active')
    burger_menu.classList.toggle('active_burger')
}

let nav_links = document.querySelectorAll('.nav_link')

nav_links.forEach( item => item.onclick = () =>{
    burger_menu.classList.remove('active_burger')
    navbar.classList.remove('active')
})


//pop up for tarrifs_not_registered.html

let pop_up_not_registered = document.querySelector('.popup_not_registered')

let connect_btns = document.querySelectorAll('.tariffs_tariff_connect_btn')

connect_btns.forEach( item => item.addEventListener('click', showingPopUp))





//pathname 

let pathname = window.document.location.pathname 

// creating pop up not registered

if(pathname === "/tariffs_not_registered.html"){
    function showingPopUp(){
        pop_up_not_registered.classList.add('active_popup')
    }
    let cancel_btn = document.querySelector('.popup_not_registered_cancel_btn')


cancel_btn.addEventListener('click', function (){
    pop_up_not_registered.classList.remove('active_popup')})
}

// creating pop up for sure deleting

else if (pathname === "/admin/tariffs_management.html"){
    let delete_tariff_btns = document.querySelectorAll('.table_delete_button')
    let popup_sure_delete = document.querySelector('.popup_sure_delete')
    delete_tariff_btns.forEach( item => item.addEventListener('click', function(){
        popup_sure_delete.classList.add('active_popup')
    }))

    let cancel_btn_sure_delete = document.querySelector('.popup_sure_delete_cancel_btn')

cancel_btn_sure_delete.addEventListener('click', function(){
    popup_sure_delete.classList.remove('active_popup')
}
)
}

else if(pathname === "/user/register.html"){

    let alertRegister = document.querySelector('.create_acc_btn')

    let popupApply = document.querySelector('.popup_success_apply')

    alertRegister.addEventListener('click', showingApply)


    function showingApply(e){
        e.preventDefault()
        popupApply.classList.add('active_popup')
    }

    let success_apply_btn_ok = document.querySelector('.popup_success_apply_btn')

    success_apply_btn_ok.addEventListener('click', closeApplyModal)

    function closeApplyModal(){
        popupApply.classList.remove('active_popup')
    }

}









console.log(window.document.location.pathname);