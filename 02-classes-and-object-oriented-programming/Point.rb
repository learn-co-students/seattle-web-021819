class Point
	def initialize(xx=0, yy=0)
		@xx = xx
		@yy = yy
	end

	attr_reader :xx, :yy
	@@origin = Point.new(0, 0)

	def distance_from(other)
	  dx = self.xx - other.xx
	  dy = self.yy - other.yy
		Math.sqrt(dx * dx + dy * dy)
	end

	def distance_from_origin
	  distance_from(@@origin)
	end

	def self.distance_between(x0, y0, x1, y1)
		p0 = Point.new(x0, y0)
		p1 = Point.new(x1, y1)
		p0.distance_from(p1)
	end

	def to_s
	  "(#{@xx}, #{@yy})"
	end
end
