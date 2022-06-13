import './Post.css'
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb'
import { IoMdShareAlt } from 'react-icons/io'
import { BsBookmark, BsThreeDots, BsChatLeft } from 'react-icons/bs'

const Post = ({
	likes,
	community_icon,
	community,
	posted_by,
	posted_time,
	title,
	category_icon,
	category,
	text,
	image,
	comments,
}) => {
	return (
		<article className="post__container">
			<div className="post__wrapper">
				<div className="post__left">
					<div className="post__left-likes">
						<TbArrowBigTop size={24} />
						<span>{likes}</span>
						<TbArrowBigDown size={24} />
					</div>
				</div>
				<div className="post">
					<div className="post__head">
						<img
							className="post__head-icon"
							src={community_icon}
							alt="community icon"
						/>
						<span className="post__head-community">{community}</span>
						<span className="post__head-posted">
							· Posted by {posted_by} {posted_time} hours ago
						</span>
						<button className="btn-primary post__head-join">Join</button>
					</div>
					<div className="post__title">
						<span>{title}</span>
						{category ? (
							<div className="post__title-category">
								{category_icon ? (
									<img src={category_icon} alt={`${category} category icon`} />
								) : (
									''
								)}
								<span>{category}</span>
							</div>
						) : (
							''
						)}
					</div>
					<div className="post__body">
						{image ? (
							<img
								className="post__body-img--horizontal"
								src={image}
								alt="funny post"
							/>
						) : (
							''
						)}
						{text ? <p className="post__body-text">{text}</p> : ''}
					</div>
					<div className="post__foot">
						<div className="post__foot-likes">
							<TbArrowBigTop size={24} />
							<span>{likes}</span>
							<TbArrowBigDown size={24} />
						</div>
						<button className="btn-gray post__foot-comments">
							<BsChatLeft size={20} />
							{comments} Comments
						</button>
						<button className="btn-gray post__foot-share">
							<IoMdShareAlt size={20} />
							Share
						</button>
						<button className="btn-gray post__foot-save">
							<BsBookmark size={20} />
							Save
						</button>
						<button className="btn-gray post__foot-more">
							<BsThreeDots size={20} />
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}
export default Post
