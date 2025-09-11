class Cart:
    def __init__(self, request):
        self.session = request.session
        cart = self.session.get("cart")
        if not cart:
            cart = self.session["cart"] = {}
        self.cart = cart

    def add(self, product, qty=1):
        product_id = str(product.id)
        if product_id not in self.cart:
            self.cart[product_id] = {"qty": 0, "price": str(product.price)}
        self.cart[product_id]["qty"] += qty
        self.save()

    def remove(self, product):
        product_id = str(product.id)
        if product_id in self.cart:
            del self.cart[product_id]
            self.save()

    def clear(self):
        self.session["cart"] = {}
        self.save()

    def save(self):
        self.session.modified = True

    def __iter__(self):
        from .models import Product
        product_ids = self.cart.keys()
        products = Product.objects.filter(id__in=product_ids)
        for product in products:
            item = self.cart[str(product.id)]
            item["product"] = product
            item["total"] = float(item["price"]) * item["qty"]
            yield item

    def total(self):
        return sum(float(i["price"]) * i["qty"] for i in self.cart.values())
