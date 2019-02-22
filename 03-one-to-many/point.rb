class Point
    attr_reader :xx, :yy
    @@all = []

    def initialize(xx, yy)
        @xx = xx
        @yy = yy

        @@all << self
    end

    def distance(other_point)
        dx = @xx - other_point.xx
        dy = @yy - other_point.yy
        return Math.sqrt(dx * dx + dy * dy)
    end

    def get_all_points
        @@all
    end

    def self.get_all_points
        @@all
    end

    # This method can be given pure coordinate data
    # and calculate the distance between points without
    # ever creating Point instances. It's a utility!
    def self.distance(x0, y0, x1, y1)
        dx = x0 - x1
        dy = y0 - y1
        return Math.sqrt(dx * dx + dy * dy)
    end
end