import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/blogs";

const Blog4 = () => {
  return (
    <>
      {blogsData.slice(0, 4).map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/blog-details/${item.id}`}
            className="blogCard -type-1 d-block "
          >
            <div className="blogCard__image">
              <div className="ratio ratio-1:1 rounded-4 rounded-8">
                <Image
                  width={400}
                  height={400}
                  className="img-ratio js-lazy"
                  src={item.img}
                  alt="image"
                  unoptimized
                />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog4;
