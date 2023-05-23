--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    "userId" integer NOT NULL,
    token character varying(100) NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: sessions_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."sessions_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."sessions_userId_seq" OWNED BY public.sessions."userId";


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id text NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0
);


--
-- Name: userme; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.userme (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    "visitCount" integer DEFAULT 0
);


--
-- Name: userme_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.userme_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.userme_id_seq OWNED BY public.userme.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visits (
    "visitCount" character varying(100000)
);


--
-- Name: sessions userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN "userId" SET DEFAULT nextval('public."sessions_userId_seq"'::regclass);


--
-- Name: userme id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userme ALTER COLUMN id SET DEFAULT nextval('public.userme_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '8939317d-687c-46f2-8c55-0cb81e4d9b86', 'Irineu');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES ('1', '48n5n_bQ1JehT3P8grxoG', 'https://media.istockphoto.com/id/1352650187/pt/foto/human-resource-manager-checks-the-cv-online-to-choose-the-perfect-employee-for-his-business.jpg?s=1024x1024&w=is&k=20&c=L334PA0-_hZE1oXJi76bxaIYaAGXRQL7XkzFwn5aXsw=', 0);
INSERT INTO public.urls VALUES ('1', 'Ml6RRQQ0kewtFXb-WQ7F5', 'https://media.istockphoto.com/id/1352650187/pt/foto/human-resource-manager-checks-the-cv-online-to-choose-the-perfect-employee-for-his-business.jpg?s=1024x1024&w=is&k=20&c=L334PA0-_hZE1oXJi76bxaIYaAGXRQL7XkzFwn5aXsw=', 0);


--
-- Data for Name: userme; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Irineu', 'irineu@driven.com', '$2b$10$xgIA3H51PtdhGNLRAo0pn.1Hh3VjXaFpKzux8pQRClWEHsawqAaL.');


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: sessions_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."sessions_userId_seq"', 2, true);


--
-- Name: userme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.userme_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: userme userme_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userme
    ADD CONSTRAINT userme_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

