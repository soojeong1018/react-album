import styles from "./styles/index.module.scss"
import CommonHeader from "../../components/common/header/CommonHeader.tsx";
import CommonSearchBar from "../../components/common/searchBar/CommonSearchBar.tsx";
import CommonNav from "../../components/common/navigation/CommonNav.tsx";
import CommonFooter from "../../components/common/footer/CommonFooter.tsx";
import Card from "./components/Card.tsx";
import {useEffect} from "react";
import axios from 'axios';
function index() {
    const getData = async () => {
        const API_URL = 'https://api.unsplash.com/search/photos';
        const API_KEY = 'i3J_6q2UlSJHC6B_j9MFvB5AbI3_VLDvUAdx2_HVuOs';
        const PER_PAGE = 30;

        const searchValue = 'Korea';
        const pageValue =100;

        try {
            const res =
                await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getData()
    }, [])



    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader />
            {/* 공통 네비게이션 UI 부분 */}
            <CommonNav />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>PhotoSplash</span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시각 자료 출처입니다. <br/>
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        {/* 검색창 UI 부분 */}
                        <CommonSearchBar />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            {/* 공통 푸더 UI 부분 */}
            <CommonFooter />
        </div>
    );
}

export default index;