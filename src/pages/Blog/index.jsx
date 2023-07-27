import { Link } from "react-router-dom";
import SpanFeatured from "../../components/modules/common/SpanFeatured";
import Title from "../../components/modules/common/Title";
import { blogs } from "../../utils/blog";

const Blog = () => {
	return (
		<main>
			<section className="grid">
				<Title
					classes={"text-2xl text-center colorPrimary font-bold my-3"}
					title={"Descubre Nuestro Blog Financiero"}
				/>
				<div className="w-10/12 mx-auto my-5">
					<p className="mb-2">
						En <SpanFeatured>YAVO Capital</SpanFeatured> nuestro objetivo es{" "}
						<strong>
							impulsar el sector financiero, inmobiliario y de bienes raíces en
							México
						</strong>{" "}
						pues creemos que tiene un increíble potencial de crecimiento; es por
						esto que junto con nuestros{" "}
						<SpanFeatured>
							<Link
								to="/productos-financieros"
								className="border-b-2 border-orange-300"
							>
								productos y soluciones financieras
							</Link>
						</SpanFeatured>
						, también te ofrecemos estos artículos y notas relevantes en nuestro
						blog financiero, que te serán de ayuda para comprender más acerca de
						estos sectores tan importantes en nuestro país.
					</p>
					<p>
						<strong>Recuerda que contamos con la mejor asistencia</strong> y
						soluciones especializadas en el mercado.
					</p>
				</div>
			</section>

			<section className="mb-5 grid md:grid w-10/12 mx-auto md:grid-cols-2">
				{blogs.map(({ title, description, img, url, name }) => (
					<figure
						className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 mb-5 md:mr-2 md:col-span-1"
						key={name}
					>
						<Link to={url}>
							<img
								className="rounded-lg object-cover h-[350px] w-full"
								src={img}
								alt={name}
							/>

							<figcaption className="absolute px-4 text-lg text-white bottom-6">
								<div className="backgroundPrimary rounded-t-xl p-2">
									<h3 className="text-xl lg:text-2xl">{title}</h3>
								</div>
								<div className="bg-white rounded-b-xl">
									<p className="text-sm italic lg:text-md text-black p-2">
										{description}
									</p>
								</div>
							</figcaption>
						</Link>
					</figure>
				))}
			</section>
		</main>
	);
};

export default Blog;
