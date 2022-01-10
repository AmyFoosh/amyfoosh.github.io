// This class is used to display objects on stage.
class Sprite {

    constructor(img, x, y) {
        
        // This is an image for sprite display. 
        this.img = img;
        
        // Width and height is based on image size.
        this.width = img.width;
        this.height = img.height;

        // Initial sprite coordinates.
        this.x = x;
        this.y = y;
    }

    // This function is for modify sprite coordinates.
    setPos(x, y) {

        this.x = x;
        this.y = y;
    }
}