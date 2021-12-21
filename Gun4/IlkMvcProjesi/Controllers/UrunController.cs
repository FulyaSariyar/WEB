using Microsoft.AspNetCore.Mvc;
using IlkMvcProjesi.Models;

namespace IlkMvcProjesi.Controllers
{
   
    public class UrunController:Controller
    {
        public IActionResult Detay(int id=0){
            if(id==0) return NotFound();

            var model= new Urun(){
                Id=id,
                Fiyat=5,
                UrunAdi="Chai"

            };
            return View(model);
        }
        public IActionResult Listele(){

            var model=new List<Urun>();
            for(int i=0; i<10; i++){
                model.Add(new Urun(){
                    Id=i+1,
                    Fiyat=5+i,
                    UrunAdi="Ürün_"+(i+1)
                });
                
            }
            return View(model);
        }
    }
}