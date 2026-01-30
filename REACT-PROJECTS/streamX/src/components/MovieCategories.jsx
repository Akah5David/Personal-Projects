export default function MovieCategories({scrollToSections}){
    return(
<div>
            <ul >
            <li
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToNowPlaying();
                }}
              >
                NowPlaying
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToPopular();
                }}
              >
                Popular
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              className="flex items-center gap-2 hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToTopRated();
                }}
              >
                Top Rated
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
            <li
              className="flex items-center gap-2 hover:hover:text-[#ffffff34]"
            >
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSections.scrollToUpComing();
                }}
              >
                Up Coming
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 30.727 30.727"
                className="w-[11px] h-[12px] font-serif"
              >
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path>{" "}
              </svg>
            </li>
        </ul>
        <ul>
            GenresArray array and write a map functio
        </ul>
</div>
    )
}