/* 1. Hàm
     - Tính giai thừa của số n bằng đệ quy
  
function giaiThua(n) {
    if (n==0 || n==1){
        return 1;
    }
    return n*giaiThua(n-1);
}
console.log(giaiThua(3));


      - Tính số Fibonacci thứ n với memoization
function fibonacci(n, memo={}){
    if (n in memo){
        return memo[n];
    }
    if (n<=1){
        return n;
    }
    memo[n]= fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n];
}
console.log(fibonacci(5));
*/

// 2. Chuỗi
/*- kiểm tra chuỗi đối xứng

function chuoiDoiXung(chuoi){
    const daoNguoc= chuoi.split('').reverse('').join('');
    return chuoi==daoNguoc;

}
console.log(chuoiDoiXung('hello'))


  - Tìm kí tự nhiều nhất trong chuỗi
function kiTuMax(chuoi){
    let dem={};
    for (let char of chuoi){
        dem[char] = (dem[char] || 0) +1;

    }
    let maxChar = null;
    let maxCount = 0;
    for (let char in dem){
        if (dem[char] > maxCount){
            maxCount= dem[char];
            maxChar= char;
        }


    }
    return {char: maxChar, count: maxCount}
}
console.log(kiTuMax('xin chao hihi'));
*/
// 3. Đối tượng và lớp
/*- Xây dựng lớp Person với các thuộc tính và phương thức getter/setter
class Person{
    constructor(name, age, sdt){
        this._name=name;
        this._age=age;
        this._sdt=sdt;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if (newName.trim()){
            this._name = newName;
        }
    } 

    get age(){
        return this._age;
    }
    set age(newAge){
        if (newAge>0){
            this._age = newAge;
        }
    } 

    get sdt(){
        return this._sdt;
    }
    set sdt(newSdt){
        if (newSdt.trim()){
            this._sdt = newSdt;
        }

    }
    
    displayInfo(){
        console.log(`Tên: ${this._name}, Tuổi: ${this._age}, SĐT: ${this._sdt}`);

    } 

}

const infor = new Person('Trần Thị Trang', 18, '035352029');
infor.displayInfo();
infor.age = 19;
infor.displayInfo();*/



/*Xây dựng lớp Rectangle với phương thức tính diện tích và chu vi
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    dienTich(){
        return this.height*this.width;
    }
    chuVi(){
        return (this.height+this.width)*2;
    }
}
const hcn= new Rectangle(3, 4)
console.log('diện tích hcn:', hcn.dienTich());
console.log('chu vi hcn:', hcn.chuVi());
*/
    



//4. Vòng lặp (Loop)
/* -In ra tất cả các số nguyên tố từ 1 đến n 
function LaSoNguyenTo(a){
    if (a<2){
        return false;
    }
    for (let i=2; i<=Math.sqrt(a); i++){
        if (a%2===0){
            return false;
        }
    }
    return true;
}

function inSoNguyenTo(n){
    for (let i=1; i<=n; i++){
        if (LaSoNguyenTo(i)){
            console.log(i);
        }
    }
}
   
inSoNguyenTo(10);

   -Tính tổng các số chia hết cho 3 hoặc 5 từ 1 đến n 
function tongCacSo(n){
    let sum=0;
    for (let i=1; i<=n; i++){
        if (i%3===0 || i%5===0){
            sum+=i;
        }
    }
    return sum;
}

console.log(tongCacSo(20));
*/

//5. Xử lý mảng Array
/*-Tìm số lớn thứ hai trong mảng (không dùng sort)
function lonThuHai(arr){
    if (arr.length <2){
        return null;
    }


let max1= Math.max(...arr);
let max2= -Infinity;

for (let i of arr){
    if (i< max1 && i>max2){
        max2=i;
    }
}
return max2===-Infinity ? null : max2;
}
    

console.log(lonThuHai([2, 5, 7, 7]));


   -Đếm số lần xuất hiện của mỗi phần tử trong mảng sử dụng reduce
function soLanXuatHien(arr){
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) +1;
        return acc;
    }, {});
}
 console.log(soLanXuatHien([9, 7, 8, 6, 7, 9]));
 */












