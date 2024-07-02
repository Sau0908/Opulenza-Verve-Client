import Swal from "sweetalert2";
import HeaderForRoute from "../shared/HeaderForRoute";
import { refresh } from "aos";
import Footer from "../Home/Footer";

const AddMenuItems = () => {
  const handleAddMenu = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const menu = form.menu.value;
    const category = form.category.value;
    const price = form.price.value;
    const item = form.item.value;
    const recipe = form.recipe.value;

    const addMenu = {
      image: image,
      menu: menu,
      category: category,
      recipe: recipe,
      item: item,
      price: price,
    };
    console.log(addMenu);

    fetch("https://restaurant-server-chi.vercel.app/menu", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addMenu),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Add a Menu successfully", "success");
        }
        refresh();
      });
  };
  return (
    <div>
      <HeaderForRoute></HeaderForRoute>
      <div className="bg-opacity-50 bg-hero bg-cover bg-right pt-28 pb-5 md:px-20">
        <div className="mx-auto max-w-2xl py-40 sm:py-20 lg:py-10">
          <div className="text-center">
            <h1 className="h2 capitalize text-white text-center">Add a Menu</h1>
            <p className="text-white/70 capitalize mb-3">
              Explore Culinary Excellence: Our Latest Menu Offering
            </p>
          </div>
        </div>

        <div className="hero min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <form onSubmit={handleAddMenu} className="card md:ms-20 flex-shrink-0 w-full max-w-sm shadow-2xl my-4 border bg-black bg-opacity-40">
              <div className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-primary text-white">
                      Menu
                    </span>
                  </label>
                  <input
                    type="text"
                    name="menu"
                    style={{ backgroundColor: "#3B3B3B" }}
                    placeholder="Indian/North Indian/South Indian/Italian"
                    className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-40 border  text-lg text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-primary text-white">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Image URL"
                    style={{ backgroundColor: "#3B3B3B" }}
                    className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-40 border text-lg text-white"
                    required
                  />
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-primary text-white">
                        Category
                      </span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="Category"
                      style={{ backgroundColor: "#3B3B3B" }}
                      className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-40 border  text-lg text-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-primary text-white">
                        Item
                      </span>
                    </label>
                    <input
                      type="text"
                      name="item"
                      placeholder="Item"
                      style={{ backgroundColor: "#3B3B3B" }}
                      className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-40 border  text-lg text-white"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-primary text-white">
                      Price
                    </span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    style={{ backgroundColor: "#3B3B3B" }}
                    className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-40 border  text-lg text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-primary text-white">
                      Recipes
                    </span>
                  </label>
                  <input
                    type="text"
                    name="recipe"
                    placeholder="Recipes"
                    style={{ backgroundColor: "#3B3B3B" }}
                    className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-40 border text-lg text-white"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-black font-primary text-white h-[40px]">
                    Add Menu
                  </button>
                </div>
              </div>
            </form>
            <div className="text-center ">
              <h3 className="h4 text-white py-4">Popular Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div>
                  <div className="card w-44 h-100 text-white shadow-xl bg-black bg-opacity-40">
                    <figure><img src="https://img.freepik.com/free-photo/plate-biryani-with-bunch-food-it_505751-3819.jpg?t=st=1694537186~exp=1694540786~hmac=11dd7de9504c359ef084d9cd940f2bf27163e79687d28fc4461498502d87935f&w=826" alt="Food" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Chicken Biriyani 
                        
                      </h2>
                      <div className="card-actions">
                        <div className="badge badge-outline">Rs. 200</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card w-44 h-100 text-white shadow-xl bg-black bg-opacity-40">
                    <figure><img src="https://img.freepik.com/premium-photo/pizza-with-salami-mozzarella-cheese-wooden-board_67394-1921.jpg?w=740" alt="Food" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                          Marghirita Pizza
                        
                      </h2>
                      <div className="card-actions">
                        <div className="badge badge-outline">Rs. 400</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card w-44 h-100 text-white shadow-xl bg-black bg-opacity-40">
                    <figure><img src="https://img.freepik.com/free-photo/bowl-salad-with-lemon-wedge-lemon-wedge-side_1340-23287.jpg?t=st=1694797737~exp=1694801337~hmac=aabae53be60f82a126c16b589de27ed9e37829410860dd35b26c848528ca9d58&w=740" alt="Food" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Caprese Salad
                        
                      </h2>
                      <div className="card-actions">
                        <div className="badge badge-outline">Rs. 200</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card w-44 h-100 text-white shadow-xl bg-black bg-opacity-40">
                    <figure><img src="https://www.indianveggiedelight.com/wp-content/uploads/2017/03/thumnail_coocnut_rice-min-1-e1499381691477.jpg" alt="Food" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Coconut Rice
                        
                      </h2>
                      <div className="card-actions">
                        <div className="badge badge-outline">Rs. 200</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card w-44 h-100 text-white shadow-xl bg-black bg-opacity-40">
                    <figure><img src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/4-april/Tamil_Nadu_pepper_rasam_Ground_Pepper_Rasam_Recipe-3.jpg" alt="Food" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Rasam
                        
                      </h2>
                      <div className="card-actions">
                        <div className="badge badge-outline">Rs. 100</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card w-44 h-100 text-white shadow-xl bg-black bg-opacity-40">
                    <figure><img src="https://img.freepik.com/free-photo/plate-biryani-with-bunch-food-it_505751-3819.jpg?t=st=1694537186~exp=1694540786~hmac=11dd7de9504c359ef084d9cd940f2bf27163e79687d28fc4461498502d87935f&w=826" alt="Food" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Mutton Biriyani
                        
                      </h2>
                      <div className="card-actions">
                        <div className="badge badge-outline">Rs. 200</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddMenuItems;
